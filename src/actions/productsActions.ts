"use server";

export async function fetchAllProducts() {
  try {
    const result = await fetch("https://dummyjson.com/products", {
      method: "GET",
      cache: "no-store",
    });

    const data = await result.json();

    return {
      success: true,
      data: data?.products,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return {
        success: false,
        message: error.message,
      };
    }
    return {
      success: false,
      message: "Some error occurred while fetching all Products!",
    };
  }
}

export async function fetchProductDetails(currentProductId: number) {
  try {
    const result = await fetch(
      `http://dummyjson.com/products/${currentProductId}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await result.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return {
        success: false,
        message: error.message,
      };
    } else {
      return {
        success: false,
        message: "Something went wrong while fetching product details",
      };
    }
  }
}
