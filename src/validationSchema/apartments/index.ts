import * as yup from 'yup';

export const apartmentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  owner_id: yup.string().nullable(),
});
