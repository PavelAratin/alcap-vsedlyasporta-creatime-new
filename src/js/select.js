const customeSelect = () => {
    const element = document.querySelector('.js-custome-select');
    const choices = new Choices(element,{
        searchEnabled:false
    });
    console.log('custome select');
}

export default customeSelect;