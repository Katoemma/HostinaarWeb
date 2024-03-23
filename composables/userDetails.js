
export default function useUserDetails() {
    // Initialize Supabase client and user
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    
    // Initialize userDetails state with useState
    const { state: userDetails, setState: setUserDetails } = useState('userDetails', () => ({
        userDetails: {},
        fetchUserDetails: async () => {
            try {
                // Fetch user details from Supabase users table with user.email as a key
                const { data, error } = await supabase
                    .from('users')
                    .select('*')
                    .eq('email', user.value.email);
                
                // Check for errors
                if (error) {
                    throw error;
                }
                
                // Update userDetails state with fetched data
                setUserDetails({ userDetails: data[0] });
            } catch (error) {
                // Handle errors
                console.error('Error fetching user details:', error.message);
                // Optionally, you can throw the error again to handle it in the component using this composable
                throw error;
            }
        }
    }));

    // Ensure that fetchUserDetails is called and awaited before accessing userDetails
    const initializeUserDetails = async () => {
        await userDetails.fetchUserDetails();
    };

    // Call initializeUserDetails when this composable is first used
    initializeUserDetails();

    // Return the userDetails state and fetchUserDetails function
    return userDetails;
}
