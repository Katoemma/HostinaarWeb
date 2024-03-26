export const useDetails = () => {
  const user = useSupabaseUser();
  const supabase = useSupabaseClient();

  const getUserDetails = async () => {
    if (!user.value) return null;

    try {
      const { data, error } = await supabase
        .from("usersProfile")
        .select("*")
        .eq("email", user.value.email);

      if (error) throw error;
      return data[0]; // Assuming we only have one user with the given email
    } catch (error) {
      console.error("Error fetching user details:", error);
      return null;
    }
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
