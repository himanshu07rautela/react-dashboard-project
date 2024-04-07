import { Mid } from "./components/Mid";
import { Bluerevenuecard } from "./components/bluerevenuecard";
import { RevenueCard } from "./components/revenuecard";
import { Sidebar } from "./components/sidebar";
import { Topbar } from "./components/topbar";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <Topbar></Topbar>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-12">
        {/* Sidebar */}
        <div className="col-span-2">
          <Sidebar />
        </div>

        {/* Cards */}
        <div className="col-span-8 md:col-span-4 mx-2 mt-2 md:mx-2 md:mt-3">
          <Bluerevenuecard
            title={"Amount pending"}
            orderCount={13}
            amount={"92,321.20"}
          />
        </div>
        <div className="col-span-6 md:col-span-3 mx-2 mt-2 md:mx-2 md:mt-3">
          <RevenueCard
            title={"Amount pending"}
            orderCount={13}
            amount={"92,321.20"}
          />
        </div>
        <div className="col-span-6 md:col-span-3 mx-2 mt-2 md:mx-2 md:mt-3">
          <RevenueCard
            title={"Amount pending"}
            orderCount={13}
            amount={"92,321.20"}
          />
        </div>
        </div>

        {/* Mid Image */}
        <div className="grid grid-cols-12 p-4">
          <div className="col-span-2">
           {null}
          </div>
          <div className=" col-span-12 md:col-span-10 ">
          <Mid></Mid>
          </div>

        </div>
        <div className="grid grid-cols-12 p4">
          <div className="col-span-4 md:col-span-6">
            {null}
          </div>
          <div className="col-span-4 font-semibold md:col-span-4">
             love from pithoragarh ⛰️❤️

          </div>
          <div  className="col-span-4 md:col-span-2">
            {null}
          </div>

        </div>

        
     
    </>
  )
}

export default App;
