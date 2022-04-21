import axios from 'axios';

const URL =
  'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary';

const options = {
  params: {
    bl_latitude: '11.847676',
    bl_longitude: '108.473209',
    tr_longitude: '109.149359',
    tr_latitude: '12.838442',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': 'f72fd6f314msh2d07be597d7cf45p1d62f2jsn29dcdcb894b4',
  },
};

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
// export const getPlacesData = async () => {
//   await axios
//     .get(URL, options)
//     .then((data) => {
//       console.log(data);
//       return data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
