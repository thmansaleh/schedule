'use client'


function Tools() {
    const showDriversNo = (e) => {
        console.log(e.target.checked)
        if (e.target.checked) {
            const driversPhons = document.querySelectorAll('.driverPhone')

            driversPhons.forEach(phone => {
                phone.style.display = 'block'
            })

        }
        if (!e.target.checked) {
            const driversPhons = document.querySelectorAll('.driverPhone')

            driversPhons.forEach(phone => {
                phone.style.display = 'none'
            })

        }
    }
    const showBorders = (e) => {
        const borders = document.querySelectorAll('.showBorders')
        if (e.target.checked) {

            borders.forEach(border => {

                border.classList.toggle('border')
                border.classList.toggle('border-black')
            })

        }
        if (!e.target.checked) {

            borders.forEach(border=> {
                border.classList.toggle('border')
                border.classList.toggle('border-black')
            })

        }
    }
    const changeColor = (e) => {
    
            const colors = document.querySelectorAll('.changeColor')

            colors.forEach(color => {

                color.style.color=e.target.value
            })

        
       
    }


    return (
        <div id="tools" className="p-4  space-y-4  ">
    <div className="flex gap-2 items-center">
        <input id="phons" defaultChecked onChange={e => showDriversNo(e)} type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
        <label htmlFor="phons" className="ml-2 text-sm text-gray-700">اظهار ارقام هواتف خبراء السير</label>
    </div>
    <div className="flex gap-2 items-center">
        <input id='borders' defaultChecked onChange={e => showBorders(e)} type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
        <label htmlFor="borders" className="ml-2 text-sm text-gray-700">اظهار حدود بين كل مستخدم</label>
    </div>
    <div className="flex gap-2 items-center">
        <input id="color" onChange={e => changeColor(e)} type="color" className="form-input h-8 w-8 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        <label htmlFor="color" className="ml-2 text-sm text-gray-700">لون خط جدول خبراء السير فقط</label>
    </div>
</div>
    )
}

export default Tools