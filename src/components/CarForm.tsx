import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux";
import { chooseModel, chooseMake, chooseYear, chooseColor } from "../redux/slices/RootSlice";

interface CarFormProps {
  id?: string[]
}

const CarForm = (props:CarFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => { 
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data) 
    if (props.id && props.id.length > 0) { 
      server_calls.update(props.id[0], data) 
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseMake(data.make))
      dispatch(chooseModel(data.model))
      dispatch(chooseYear(data.year))
      dispatch(chooseColor(data.color))

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
    }
  }

  return (
    <div className="pb-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="make">Make</label> 
          <Input {...register('make')} name="make" placeholder="Make" />
        </div>
        <div className="pt-3">
          <label htmlFor="model">Model</label> 
          <Input {...register('model')} name="model" placeholder="Model" />
        </div>
        <div className="pt-3">
          <label htmlFor="year">Year</label> 
          <Input {...register('year')} name="year" placeholder="Year" />
        </div>
        <div className="pt-3">
          <label htmlFor="color">Color</label> 
          <Input {...register('color')} name="color" placeholder="Color" />
        </div> 
        <div className="flex justify-center">
          <div>
            <Button 
            className="flex mb-12 bg-emerald-800 p-2 pl-7 pr-7 rounded hover:bg-slate-800 text-white mt-10"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CarForm