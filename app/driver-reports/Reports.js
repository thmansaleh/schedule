import { swrDriverReports } from "../swr/driverReports"
import Table from "./Table"

function Reports({jobId}) {
    const { data , error, isLoading } = swrDriverReports(jobId)
if(isLoading) return 'جاري التحميل....'
 if(data) {
    if(data.length==0) return <div className="fixed inset-0 flex justify-center items-center">
        <div className=" font-semibold text-gray-800">لاتوجد احداث</div>
    </div>
    return <>
    <Table data={data}/>
    </>
 }

}

export default Reports