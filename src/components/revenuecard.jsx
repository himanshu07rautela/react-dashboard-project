export const RevenueCard = function ({
    title,
    orderCount,
    amount
}) {
    return (
        <>
            <div className=' bg-white rounded shadow-md p-4'>
                <div className="flex">
                <div className=" text-gray-700 p-2">
                    {title}
                    </div>
                    <div className="flex justify-center flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    </div>
                    </div>

               
                <div className=" flex justify-between p-2">
                    <div className=" font-semibold text-2xl">
                        Rs{amount}
                    </div>
                    <div className="flex cursor-pointer font-semibold ">
                        <div className=" text-blue-600 underline" >
                            {orderCount > 0 ? <div>{orderCount}orders
                            </div> : null}
                        </div>
                        <div >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path className=" text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
// it will give us the full width card ,and thend user
// will use it accordingly