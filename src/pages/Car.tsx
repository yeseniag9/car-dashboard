import fordExplorer from "../assets/images/ford-explorer.jpg"
import datsun510 from "../assets/images/datsun-510.jpg"

function Car() {
  return (
    <div>
        <div className="flex justify-center pt-14 m-9 text-7xl font-sans">My Cars</div>
        <div className="flex flex-row">
            <div className="flex flex-col pl-14">
                <img className="max-w-3xl p-14 pt-14" src={fordExplorer} alt="1991 Ford Explorer" />
                <h1 className="pl-14 text-2xl">1991 Ford Explorer</h1>
            </div>

            <div className="flex flex-col pl-8">
                <img className="max-w-3xl p-14 pt-14" src={datsun510} alt="1970 Datsun 510" />
                <h1 className="pl-14 text-2xl">1970 Datsun 510</h1>
            </div>
        </div>
    </div>

  )
}

export default Car