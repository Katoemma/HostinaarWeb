<script setup>
const toast = useToast();
const {getUserDetails} = useDetails();




const hostelName = ref("");
const hostelDescription = ref("");
const hostelContact = ref("");
const hostelCountry = ref("");
const hostelLocation = ref("");

//function to create a hostel
const createHostel = async () => {
  //validate the data
  console.log(getUserDetails());
  if (
    !hostelName.value ||
    !hostelDescription.value ||
    !hostelContact.value ||
    !hostelCountry.value ||
    !hostelLocation.value
  ) {
    toast.add({
      title: "Failed to execute command",
      description: "Please fill all the fields",
      status: "error",
      duration: 5000,
      color: "red",
      isClosable: true,
    });
  }else{
    //upload data to supabase
   // Upload data to Supabase
   try {
      // Retrieve user details
      const userDetails = await getUserDetails();

      // Check if user details exist
      if (userDetails) {
        // Log user ID
        console.log("User ID:", userDetails.id);
      } else {
        console.log("User details not available");
      }

      // Proceed with hostel creation
      // ...
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }
};
</script>
<template>
  <div class="flex flex-col">
    <div class="mt-5">
      {{ hostelName }}
      {{ hostelDescription }}
      {{ hostelContact }}
      {{ hostelCountry }}
      {{ hostelLocation }}
      <div class="form">
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2"
              >Company Name <abbr title="required">*</abbr></label
            >
            <input
              v-model="hostelName"
              placeholder="Company Name"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="text"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2"
              >Contact<abbr title="required">*</abbr></label
            >
            <input
              v-model="hostelContact"
              placeholder="Enter company phone"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="tel"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red-500 text-xs">Please fill out this field.</p>
          </div>
        </div>
        <div class="flex-auto w-full mb-1 text-xs space-y-2">
          <label class="font-semibold text-gray-600 py-2">Description</label>
          <textarea
            v-model="hostelDescription"
            required=""
            name="message"
            id=""
            class="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-4 px-4"
            placeholder="Describe your hostel"
            spellcheck="false"
          ></textarea>
          <p class="text-xs text-gray-400 text-left my-3">
            You inserted 0 characters
          </p>
        </div>
        <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Amenities</label>
            <div class="flex space-x-1">
              <button
                class="bg-green-600 text-white rounded-full px-3 h-6 text-xs"
              >
                Wifi
              </button>
              <button
                class="bg-green-600 text-white rounded-full px-3 h-6 text-xs"
              >
                Parking
              </button>
              <button
                class="bg-green-600 text-white rounded-full px-3 h-6 text-xs"
              >
                Laundry
              </button>
            </div>
          </div>
        </div>
        <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
          <div class="w-full flex flex-col mb-3">
            <label class="font-semibold text-gray-600 py-2"
              >Country of operation<abbr title="required">*</abbr></label
            >
            <select
              v-model="hostelCountry"
              class="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full"
              required="required"
              name="integration[city_id]"
              id="integration_city_id"
            >
              <option value="">Seleted Country</option>
              <option value="Uganda">Uganda</option>
              <option value="Kenya">Kenya</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Burundi">Burundi</option>
            </select>
          </div>
          <div class="w-full flex flex-col mb-3">
            <label class="font-semibold text-gray-600 py-2"
              >Google map location</label
            >
            <input
              v-model="hostelLocation"
              placeholder="Add hostel location Url"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="text"
              name="integration[street_address]"
              id="integration_street_address"
            />
            <p class="text-sm text-red-500 hidden mt-3" id="error">
              Please fill out this field.
            </p>
          </div>
        </div>

        <p class="text-xs text-red-500 text-right my-3">
          Required fields are marked with an asterisk
          <abbr title="Required field">*</abbr>
        </p>
        <div
          class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse"
        >
          <button
            class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            @click="createHostel"
            class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
