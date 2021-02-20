//const url = 'https://voda-react-assessment.herokuapp.com/menu';
const url = '/menu';

export const GetMenu = async () => {
  try {
    const response = await fetch(url,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
      });
    if (!response.ok) {
      console.log('GetMenu Request received a "non 2xx" response, HTTP : ', response.status);
      return ;
    } else {
      let json = '';
      json = await response.json();
      console.log('GetMenu Request received response, : ', json);
     
      return json;
    }
  } catch (error) {
      console.error('GetMenu caught error during Get terms Request : ', error);
      return ;
  }
};
