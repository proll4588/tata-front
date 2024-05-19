export const token = {
  save: async (token: string) => {
    const tokenData = {
      token,
      time: Date.now(),
    };
    localStorage.setItem('tokenData', JSON.stringify(tokenData));
  },
  // TODO: Валидировать токены
  get: () => {
    const tokenDataStr = localStorage.getItem('tokenData');
    if (tokenDataStr) {
      const parseToken = parseJsonToken(tokenDataStr);
      return parseToken;
    } else {
      return null;
    }
  },
  getAccessToken: () => {
    const tokenDataStr = localStorage.getItem('tokenData');
    if (tokenDataStr) {
      const parseToken = parseJsonToken(tokenDataStr);
      return parseToken;
    } else {
      return null;
    }
  },
  getRefreshToken: () => {
    const tokenDataStr = localStorage.getItem('tokenData');
    if (tokenDataStr) {
      const parseToken = parseJsonToken(tokenDataStr);
      return parseToken;
    } else {
      return null;
    }
  },
  clear: () => {
    localStorage.removeItem('tokenData');
  },
};

const parseJsonToken = (str: string): Token | null => {
  try {
    const tokenData = JSON.parse(str) as Token;
    if (tokenData.time) {
      return tokenData;
    } else {
      throw new Error('not-valid');
    }
  } catch (error) {
    token.clear();
    return null;
  }
};

export interface Token {
  token: string;
  time: string;
}
