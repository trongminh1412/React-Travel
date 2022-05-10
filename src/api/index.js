import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          'x-rapidapi-key':
            'f72fd6f314msh2d07be597d7cf45p1d62f2jsn29dcdcb894b4',
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
// export const getPlacesData = async (sw, ne) => {
//   await axios
//     .get(URL, {
//       params: {
//         bl_latitude: sw.lat,
//         bl_longitude: sw.lng,
//         tr_longitude: ne.lng,
//         tr_latitude: ne.lat,
//       },
//       headers: {
//         'x-rapidapi-key': 'f72fd6f314msh2d07be597d7cf45p1d62f2jsn29dcdcb894b4',
//         'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//       },
//     })
//     .then((data) => {
//       console.log(data);
//       return data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
