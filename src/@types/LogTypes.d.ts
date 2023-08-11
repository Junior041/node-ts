interface LogClassTypes {
  idLoja: number;
  ano: number;
  mes: number;
}
interface LogObjectTypes {
  idLoja?: number;
  status: number;
  mensagem: string;
  [key: string]: any;
}
