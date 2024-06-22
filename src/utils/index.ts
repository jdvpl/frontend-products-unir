import jwt, { JwtPayload } from 'jsonwebtoken';
export const clearSessionStorages = () =>{
    sessionStorage.clear()
}

export function decodeJwt(token: string): JwtPayload | null {
  try {
    // Decodificar el JWT sin verificar la firma
    const decoded = jwt.decode(token);
    if (decoded && typeof decoded === 'object') {
      return decoded as JwtPayload;
    }
    return null;
  } catch (error) {
    return null;
  }
}


