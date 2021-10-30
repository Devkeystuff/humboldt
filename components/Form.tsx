import React, { useEffect } from "react";
import styled from "styled-components";
import { useForm, useFormState } from "react-hook-form";
import { Button } from "./styled/Button.styled";
import { FormControl } from "./styled/FormControl.styled";
import { InlineGrid } from "./styled/InlineGrid.styled";

export interface IFormValues {
  title: string;
  description: string;
  email: string;
}

interface IFormProps {
  onSubmit: (data: IFormValues, preview: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
}

const StyledForm = styled.form`
  display: flex;
  max-width: 500px;
  flex-direction: column;
  gap: 3rem;
  justify-content: space;
  margin: 0;
  font-family: Raleway;

  .error {
    position: absolute;
    color: white;
    margin-top: -30px;
    &:first-child {
      margin-left: 390px;
    }
  }
`;

export const Form: React.FC<IFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormValues>();
  const { isSubmitting } = useFormState<IFormValues>({ control });

  const setIsLoading = props.setIsLoading;
  useEffect(() => {
    setIsLoading(isSubmitting);
  }, [isSubmitting, setIsLoading]);

  const onPreview = () => handleSubmit((data) => props.onSubmit(data, true))();
  const onSubmit = () => handleSubmit((data) => props.onSubmit(data, false))();

  return (
    <StyledForm>
      <div>
        <FormControl
          placeholder="Place Name"
          autoComplete="off"
          className="credential-inputs"
          {...register("title", {
            required: "Place name is required",
            maxLength: {
              value: 20,
              message: "Value longer than 20 characters",
            },
          })}
        />
        {errors.title && <p className="UpperErrors">{errors.title.message}</p>}
      </div>
      <div>
        <FormControl
          placeholder="E-mail"
          autoComplete="off"
          className="credential-inputs"
          {...register("email", {
            required: "Email is required",
            maxLength: {
              value: 50,
              message: "Value longer than 50 characters",
            },
          })}
        />
        {errors.email && <p className="UpperErrors">{errors.email.message}</p>}
      </div>
      <FormControl
        id="formDescription"
        autoComplete="off"
        placeholder="Description"
        {...register("description", {
          required: "Place description is required",
          maxLength: {
            value: 200,
            message: "Value longer than 255 characters",
          },
        })}
      />
      {errors.description && (
        <p id="DescriptionError">{errors.description.message}</p>
      )}
      <InlineGrid>
        <Button disabled={isSubmitting} onClick={onPreview} type="button">
          Preview
        </Button>
        <Button disabled={true} onClick={onSubmit} type="button">
          Continue
        </Button>
      </InlineGrid>
    </StyledForm>
  );
};
