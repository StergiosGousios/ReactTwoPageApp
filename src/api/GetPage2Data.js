//const url = 'https://voda-react-assessment.herokuapp.com/page';
const url = '/page';

export const GetPage2Data = async () => {
  try {
    const response = await fetch(url,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
      });
    if (!response.ok) {
      console.log('GetPage2Data Request received a "non 2xx" response, HTTP : ', response.status);
      return ;
    } else {
      let json = '';
      json = await response.json();
      return json;
    }
  } catch (error) {
      console.error('Caught error during Get ../page : ', error);
      return ;
  }
};