export {};

declare global {
  interface IRequest {
    url: string;
    method: string;
    body?: { [key: string]: any };
    queryParams?: any;
    useCredentials?: boolean;
    headers?: any;
    nextOption?: any;
  }

  interface IBackendRes<T> {
    error?: string | string[];
    message: string;
    statusCode: number | string;
    data?: T;
  }

  interface IAboutUs {
    title: string;
    description: string;
    image: string;
  }

  interface IProduct {
    _id: string;
    available: string;
    description: string;
    featured_image: {
      src: string;
    };
    handle: string;
    image: string[];
    media: string;
    name: string;
    price: number;
    price_max: number;
    price_min: number;
    title: string;
    type: string;
    url: string;
    code_product: string;
    material: string;
    vendor: string;
    not_allow_promotion: string;
    sole_quantity: number;
    collection: string;
    weight: string;
  }

  interface ICollection {
    _id: string;
    name: string;
    product: IProduct[];
  }

  interface IResPaginate<T> {
    meta: {
      currentPage: string;
      pageSize: string;
      pages: number;
      total: number;
    };
    result?: T[];
  }

  interface ICustomer {
    name: string;
    email: string;
    phone: string;
    address: string;
    product_order: string;
    quantity: number;
  }

  interface IState {
    _id: string;
    isFetching: boolean;
    isOpenCart: boolean;
    totalPay: number;
    infoOrder: {
      fullName: string;
      address: string;
      phone: string;
      email: string;
      note: string;
    };
    note: string;
    data: IProduct[];
  }

  interface IStateInfo {
    fullName: string;
    address: string;
    phone: string;
    email: string;
    note: string;
  }
}
