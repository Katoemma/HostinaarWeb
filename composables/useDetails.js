export const useDetails = () => {
  const user = useSupabaseUser();
  const supabase = useSupabaseClient();

  const getUserDetails = async () => {
    const { data, error } = await supabase.from("users").select("*").eq("email", user.value.email);
    if (error) throw error;
    return data;
  };

  //function to signup user
  const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return data.user;
  };

  return {
    getUserDetails,
    signUp,
  };
};
