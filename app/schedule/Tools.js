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
        <div id="tools" className="p-2 flex gap-4 items-center flex-wrap ">
            <div className="flex gap-2 items-center">
                <input id="phons" defaultChecked onChange={e => showDriversNo(e)} type="checkbox" />
                <label htmlFor="phons" >اظهار ارقام هواتف خبراء السير</label>
            </div>
            <div  className="flex gap-2 items-center">
                <input id='borders' defaultChecked onChange={e => showBorders(e)}  type="checkbox" />
                <label htmlFor="borders" >اظهار حدود بين كل مستخدم</label>
            </div>
            <div  className="flex gap-2 items-center">
                <input id="color" onChange={e => changeColor(e)}  type="color" />
                <label  htmlFor="color">لون خط جدول خبراء السير فقط</label>
            </div>
        </div>
    )
}

export default Tools