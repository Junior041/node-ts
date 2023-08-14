interface VariaveisGlobalType {
  RespostaSucesso: number;
  RespostaErro: number;
}

export const RetornoStatus = {
  RespostaSucesso: 200,
  RespostaErro: 201,
} as const;

type RetornoStatus = VariaveisGlobalType;
