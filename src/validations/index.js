import Schema from "validate";

export const userLogin = new Schema({
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
export const forgotData = new Schema({
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
