export default class Helper {

    get stays (){ return cy.get('[href="?pwaLob=wizard-hotel-pwa-v2"]') }
    get goingTo(){ return cy.contains('[type="button"]','Going to') }
    get currentMonthDatePicker(){ return cy.get('[class="uitk-date-picker-selection-date"]').eq(0) }



    datePicker(dayIn,dayOut){
        let date = new Date()
        date.setDate(date.getDate()+dayIn)
        let checkInStart = date.getDate()
        let checkInMonth = date.toLocaleString('default',{month:'short'})
        let checkInYear = date.getFullYear()
        let date2 = new Date()
        date2.setDate(date2.getDate()+dayOut)
        let checkoutEnd = date2.getDate()
        let checkOutMonth = date2.toLocaleString('default',{month:'short'})
        let checkOutYear = date2.getFullYear()
        let checkIn = `${checkInMonth+' '+checkInStart+', '+checkInYear}`
        let checkout = `${checkOutMonth+' '+checkoutEnd+', '+checkOutYear}`
        console.log(checkInStart,checkoutEnd)

        this.currentMonthDatePicker
            .invoke('prop', 'innerText')
            .then((res)=>{
                console.log(checkInMonth)
                if (!res.includes(checkInMonth)){
                    cy.findByRole('button', { name: /previous month/i }).click({force:true})
                    cy.get(`[aria-label^="${checkIn}"]`).click({force:true})
                    cy.get(`[aria-label^="${checkout}"]`).click({force:true})
                }else{
                    cy.get(`[aria-label^="${checkIn}"]`).click({force:true})
                    cy.get(`[aria-label^="${checkout}"]`).click({force:true})
                }
            })
    }


    visitBasePage(){
        cy.visit('/')
    }

}