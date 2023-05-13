import Background from '../assets/images/car.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`, height: 1600, marginTop:-640} }
      className="flex flex-row justify-center mx-auto bg-cover"
      >
    </div>
  )
}

export default Home