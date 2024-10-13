
export const generateResponse = (data: any, message: String, code: number = 200) => {
    return Response.json({ message, data }, { status: code });
}

export const generateRandomOTP = () => {
    return Math.floor(10000 + Math.random() * 90000);
}

export const formDataToJson = async (formData: FormData): Promise<{ [key: string]: any }> => {
    const data: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    return data;
  };