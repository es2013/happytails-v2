// Use this to decode a token and get the user's information out of it
import decode from 'jwt-decode';

// Create a new class to instantiate for a user
class AuthService {
  // Get user data
  getProfile() {
    return decode(this.getToken());
  }

  // Check if user's logged in
  loggedIn() {
    // Checks to see if there is a saved token and whether it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // Check to see if the token has expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);

    // DO NOT USE THIS LINE OF CODE HERE, it refrehes the page upon
    // login and we will lose the global state.
    // window.location.assign('/');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // This will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();
