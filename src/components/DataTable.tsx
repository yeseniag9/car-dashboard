import React, { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
  { field: 'id', headerName: "ID", width: 90, hide: true },
  { field: 'make', headerName: "Make", flex: 1 },
  { field: 'model', headerName: "Model", flex: 1},
  { field: 'year', headerName: "Year", flex: 1},
  { field: 'color', headerName: "Color", flex: 2}
]

function DataTable() {
  const [ open, setOpen ] = useState(false);
  const { carData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
    setTimeout( () => { window.location.reload() }, 500)
  }

  return (
    <>
      <Modal 
        id={selectionModel}
        open={open}
        onClose={handleClose}
      />
      <div className="flex flex-row items-center justify-center p-10">
        <div>
          <button
            className="p-3 bg-slate-300 m-3 pl-4 pr-4 rounded hover:bg-slate-800 hover:text-white"
            onClick={() => handleOpen()}
          >
            Create New Car
          </button>
        </div>
        <Button onClick={handleOpen} className="p-3 bg-slate-300 m-3 pl-12 pr-12 rounded hover:bg-slate-800 hover:text-white">Update</Button> 
        <Button onClick={deleteData} className="p-3 bg-slate-300 m-3 pl-12 pr-12 rounded hover:bg-slate-800 hover:text-white">Delete</Button>
      </div>
      <div className={ open ? "hidden" : "container ml-14 mt-5 flex flex-col"} 
        style={{ height: 400, width: '100%' }}
        >
          <h2 className="p-3 bg-slate-700 text-white pl-4 my-2 rounded">My Cars</h2>
          <DataGrid rows={carData} columns={columns} rowsPerPageOptions={[5]} 
          checkboxSelection={true}
          onSelectionModelChange={ (item:any) => {
            setSelectionModel(item)
          }}
        />
      </div>
    </>
  )
}

export default DataTable