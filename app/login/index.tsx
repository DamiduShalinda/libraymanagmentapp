import { Controller, useForm } from "react-hook-form";
import { View, Text, StyleSheet, TextInput, Pressable, Button } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormData, loginSchema } from "@/modal/login";
import { useMutation, useQuery } from "@tanstack/react-query";
import { login } from "@/api/login";
import { useRouter } from "expo-router";


export default () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    loginMutation.mutate(data);
  };

  const tempLogin = () => {
    router.replace("/(drawer)/(tabs)/home");
  }

  const loginMutation = useMutation({
    mutationFn: login,
    onMutate: () => {
    },
    onError: (error) => {
      console.log("onError", error);
      reset();
    },
    onSuccess: (data) => {
      router.replace("/(drawer)/(tabs)/home");
    },
  })

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
      <Text style={styles.headerText}>Library - Login</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.inputBox}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Email"
              keyboardType="email-address"
            />
          )}
          name="email"
          rules={{ required: "Email is required" }}
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.inputBox}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              secureTextEntry
              placeholder="Password"
            />
          )}
          name="password"
          rules={{ required: "Password is required" }}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}
        <Pressable onPress={handleSubmit(onSubmit)} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </Pressable>
        <Button title="temp login" onPress={tempLogin} />
      </View>
      <Pressable onPress={() => {router.push("/register/")}} style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register New User</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputBox: {
    width: "90%",
    padding: 15,
    backgroundColor: "#E7E7E7",
    borderRadius: 5,
    borderColor: "#313131",
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 5,
  },
  submitButton: {
    backgroundColor: "#313131",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    width: "90%",
  },
  submitButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  registerButton: {
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    width: "80%",
  },
  registerButtonText: {
    color: "#313131",
    textAlign: "center",
  },
});
