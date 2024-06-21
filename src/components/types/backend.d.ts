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
    available: string;
    description: string;
    featured_image: string;
    handle: string;
    image: string[];
    media: string;
    price: number;
    price_max: number;
    price_min: number;
    tag: string;
    title: string;
    type: string;
    url: string;
    pagetitle: string;
    metadescription: string;
    vendor: string;
    not_allow_promotion: string;
    sole_quantity: string;
  }
}
