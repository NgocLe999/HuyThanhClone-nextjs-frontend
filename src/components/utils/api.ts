import queryString from "query-string";

export const sendRequest = async <T>(props: IRequest) => {
  let {
    url,
    method,
    body,
    queryParams = {},
    useCredentials = false,
    headers = {},
    nextOption = {},
  } = props;

  const options: any = {
    method: method,
    // by default setting the content-type to be json type
    headers: new Headers({ "content-type": "application/json", ...headers }),
    body: body ? JSON.stringify(body) : null,
    ...nextOption,
  };
  if (useCredentials) options.credentials = "include";

  if (queryParams) {
    url = `${url}?${queryString.stringify(queryParams)}`;
  }

  return fetch(url, options).then((res) => {
    if (res.ok) {
      return res.json() as T;
    } else {
      return res.json().then(function (json) {
        // to be able to access error status when you catch the error
        return {
          statusCode: res.status,
          message: json?.message ?? "",
          error: json?.error ?? "",
        } as T;
      });
    }
  });
};

export const callFetchProductDetails = async (id: string) => {
  const res = await sendRequest<IBackendRes<IProduct>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/product/${id}`,
    method: "GET",
  });
  const productDetails = res?.data ?? [];
  return productDetails;
};

export const getCustomerOrder = async (email: string) => {
  const res = await sendRequest<IBackendRes<ICustomer>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/customers/email/`,
    method: "POST",
    queryParams: {
      email: email,
    },
    nextOption: { cache: "no-store" },
  });
  return res?.data;
};

export const sendEmail = async (id: string) => {
  await sendRequest<IBackendRes<ICustomer>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/mail/${id}`,
    method: "GET",
  });
};
