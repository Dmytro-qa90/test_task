const username = 'standard_user';
const password = 'secret_sauce';

async function loginToApp() {
    await browser.url('https://www.saucedemo.com'); 
    console.log('Logging in...');
    const usernameInput = await $('#user-name');   
    const passwordInput = await $('#password');    
    const loginButton = await $('#login-button');

    await usernameInput.setValue(username);        
    await passwordInput.setValue(password);        
    await loginButton.click();                     
}

module.exports = { loginToApp };




    