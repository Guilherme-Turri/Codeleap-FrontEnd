const API_URL = 'https://ts-backend-codeleap.herokuapp.com/api/';

export function USER_LOGIN(email, password) {
  return {
    url: `${API_URL}login`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    },
  };
}

export function USER_TOKEN(token, email, password) {
  return {
    url: `${API_URL}auth`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify({ email, password }),
    },
  };
}

export function USER_REGISTER(name, email, password) {
  return {
    url: `${API_URL}register`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    },
  };
}

export function POST_GET() {
  return {
    url: `${API_URL}posts`,
    options: {
      method: 'GET',
    },
  };
}

export function POST_CREATE(token, title, content, author, authorId) {
  return {
    url: `${API_URL}posts`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify({ title, content, author, authorId }),
    },
  };
}

export function POST_UPDATE(token, title, content, author, authorId, id) {
  return {
    url: `${API_URL}posts/${id}`,
    options: {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify({ title, content, author, authorId }),
    },
  };
}

export function POST_DELETE(token, id) {
  return {
    url: `${API_URL}posts/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        'x-access-token': token,
      },
    },
  };
}
