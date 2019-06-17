import Schema from "validate";

export const validateUserLoginPA = new Schema({
  tident: {
    required: true,
    message: {
      required: "T.ident o Cédula es requerido"
    }
  },
  code: {
    required: true,
    message: {
      required: "El Código es requerido"
    }
  },
  password: {
    required: true,
    message: {
      required: "La Contraseña es requerida"
    }
  }
});
export const validateForgotDataPA = new Schema({
  profile: {
    required: true,
    message: {
      required: "El Perfil  es requerido"
    }
  },
  tident: {
    required: true,
    message: {
      required: "T.ident o Cédula es requerido"
    }
  }
});
