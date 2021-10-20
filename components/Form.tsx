import React from "react";
import { useForm } from "react-hook-form";

export interface IFormValues {
  placeName: string;
  placeDescription: string;
  email: string;
}

interface IFormProps {
  onSubmit: (data: IFormValues) => void;
}

export const Form: React.FC<IFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <input
        {...register("placeName", {
          required: "Place name is required",
          maxLength: {
            value: 20,
            message: "Value longer than 20 characters",
          },
        })}
      />
      {errors.placeName && <p>{errors.placeName.message}</p>}
      <input
        {...register("placeDescription", {
          required: "Place description is required",
          maxLength: {
            value: 255,
            message: "Value longer than 255 characters",
          },
        })}
      />
      {errors.placeDescription && <p>{errors.placeDescription.message}</p>}
      <input
        {...register("email", {
          required: "Email is required",
          maxLength: {
            value: 50,
            message: "Value longer than 50 characters",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <input type="submit" />
    </form>
  );
};
