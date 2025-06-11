const themes = {
  colors: {
    primary: '#41B06E',

    background: "#EBEEF7",

    error: '#F93176',

    text: '#707070',
  },
  font: {
    family: 'var(--font-montserrat)'
  },
  box: {
    shadow: {
      default: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      strong: 'rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    }
  },
  responsive: {
    mobile: 767,    // iPhone, Android phones
    desktop: 1024,  // Laptops, monitores maiores
  }
}

export default themes;