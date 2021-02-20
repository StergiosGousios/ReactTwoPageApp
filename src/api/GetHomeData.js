//const url = 'https://voda-react-assessment.herokuapp.com/home';
const url = '/home';

export const GetHomeData = async () => {
  try {
    const response = await fetch(url,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
      });
    if (!response.ok) {
      console.log('GetHomeData Request received a "non 2xx" response, HTTP : ', response.status);
      return ;
    } else {
      let json = '';
      json = await response.json();
      console.log('GetHomeData Request received response, : ', json);
     
      return json;
    }
  } catch (error) {
      console.error('GetHomeData caught error during Get terms Request : ', error);
      return ;
  }
};