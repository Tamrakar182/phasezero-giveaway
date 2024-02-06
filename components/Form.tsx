import { useForm } from "react-hook-form";
import Input from "./Input";

type FormValues = {
  name: string;
  email: string;
  phoneNo: string;
  address: string;
  height: string;
  weight: string;
};

type Props = {
  onSubmit: (data: FormValues) => void;
};

const Form = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      phoneNo: "",
      address: "",
      height: "",
      weight: "",
    },
  });

  return (
    <form
      id="form"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full my-4 flex flex-col gap-y-4"
    >
      <Input
        id="name"
        label="Name"
        {...register("name", {
          required: "Name is required",
        })}
        type="text"
        autoComplete="name"
        errors={errors}
      />

      <Input
        id="email"
        label="Email"
        {...register("email", {
          required: "Email is required",
        })}
        autoComplete="email"
        errors={errors}
      />

      <Input
        id="phoneNo"
        label="Phone Number"
        {...register("phoneNo", {
          required: "Phone Number is required",
          minLength: {
            value: 10,
            message: "Phone Number must be at exactly 10 characters long",
          },
          maxLength: {
            value: 10,
            message: "Phone Number must be at exactly 10 characters long",
          },
        })}
        autoComplete="tel"
        errors={errors}
        touched={touchedFields}
      />

      <Input
        id="address"
        label="Address"
        {...register("address", {
          required: "Address is required",
        })}
        autoComplete="street-address"
        errors={errors}
      />

      <div className="flex flex-row gap-3">
        <Input
          id="height"
          label="Height (in ft)"
          {...register("height", {
            required: "Height is required",
          })}
          autoComplete="height"
          errors={errors}
        />

        <Input
          id="weight"
          label="Weight (in kg)"
          {...register("weight", {
            required: "weight is required",
          })}
          autoComplete="weight"
          errors={errors}
        />
      </div>
    </form>
  );
};

export default Form;
