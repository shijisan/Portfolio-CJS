function theme() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
    const handleThemeChange = (event) => {
      if (event.matches) {
        document.body.style.backgroundColor = "#1d1d20";
      } else {
        // Change to light mode
        document.body.style.backgroundColor = "white";
        console.log("Change to light mode!");
      }
    };
  
    darkModeMediaQuery.addEventListener('change', handleThemeChange);
  
    // Initial check to set the initial theme
    handleThemeChange(darkModeMediaQuery);
  }
  
  theme();
  