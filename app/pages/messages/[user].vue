<script setup>
definePageMeta({
    layout: 'authenticated'
})

// Mock data for conversations
const conversations = ref([
    {
        id: 1,
        name: "Tee💕💖",
        avatar: "T",
        lastMessage: "something dey happen...",
        time: "15 Min",
        messages: [
            { id: 1, text: "Yo mandem", sentByUser: false },
            { id: 2, text: "Cho dey house?", sentByUser: false },
            { id: 3, text: "Kwasia 😂😂", sentByUser: true },
            { id: 4, text: "You dey hung dier you kai say house dey", sentByUser: true },
        ],
    },
    {
        id: 2,
        name: "Zeepay",
        avatar: "Z",
        lastMessage: "Hi Neequaye Kotey...",
        time: "12:36 PM",
        messages: [
            { id: 1, text: "Hi Neequaye Kotey", sentByUser: false },
        ],
    },
]);

const selectedConversation = ref(null);
const newMessage = ref("");

// Computed property to get the selected conversation details
const currentConversation = computed(() =>
    conversations.value.find(
        (conversation) => conversation.id === selectedConversation.value
    )
);

// Function to select a conversation
const selectConversation = (id) => {
    selectedConversation.value = id;
};

// Function to send a message
const sendMessage = () => {
    if (newMessage.value.trim() && currentConversation.value) {
        currentConversation.value.messages.push({
            id: Date.now(),
            text: newMessage.value.trim(),
            sentByUser: true,
        });
        newMessage.value = ""; // Clear input
    }
};
</script>

<template>
    <div class="flex h-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">
        <!-- Conversations List Sidebar -->
        <aside class="w-1/4 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 rounded-l-lg">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Start Chat
                </button>
            </div>
            <ul class="overflow-y-auto h-full">
                <li v-for="conversation in conversations" :key="conversation.id"
                    @click="selectConversation(conversation.id)"
                    class="flex items-center space-x-4 p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                    :class="{ 'bg-gray-100 dark:bg-gray-700': selectedConversation === conversation.id }">
                    <div
                        class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 font-bold uppercase">
                        <span v-if="conversation.avatar">{{ conversation.avatar }}</span>
                    </div>
                    <div class="flex-1">
                        <p class="text-sm font-semibold">{{ conversation.name }}</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400 truncate w-36">
                            {{ conversation.lastMessage }}
                        </p>
                    </div>
                    <span class="text-xs text-gray-500 dark:text-gray-400">{{ conversation.time }}</span>
                </li>
            </ul>
        </aside>

        <!-- Main Chat Area -->
        <div class="flex-1 flex flex-col">
            <!-- Chat Header -->
            <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
                <h2 class="text-lg font-semibold">
                    {{ currentConversation?.name || "Select a Chat" }}
                </h2>
            </div>

            <!-- Chat Messages -->
            <div class="flex-1 overflow-y-auto p-4 space-y-6">
                <div v-for="message in currentConversation?.messages || []" :key="message.id" class="flex items-end"
                    :class="{
                        'justify-end': message.sentByUser,
                        'justify-start': !message.sentByUser,
                    }">
                    <!-- User Avatar for External Messages -->
                    <div v-if="!message.sentByUser" class="flex-shrink-0">
                        <div
                            class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 font-bold uppercase">
                            {{ currentConversation.avatar }}
                        </div>
                    </div>

                    <!-- Message Bubble -->
                    <div :class="{
                        'bg-blue-500 text-white': message.sentByUser,
                        'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white': !message.sentByUser,
                    }" class="p-3 rounded-lg max-w-md flex">
                        {{ message.text }}
                    </div>
                </div>
            </div>

            <!-- Message Input -->
            <div class="p-4 border-t border-gray-200 dark:border-gray-700">
                <div class="flex items-center space-x-4">
                    <input v-model="newMessage" type="text" placeholder="Type your message..."
                        class="flex-1 p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    <button @click="sendMessage" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Send
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
