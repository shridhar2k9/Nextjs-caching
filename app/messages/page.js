import Messages from '@/components/messages';

export default async function MessagesPage() {
  // this two option used to cache and to not caching config using fetch method
  const response = await fetch('http://localhost:8080/messages', {
    // cache:'force-cache',
    cache:'no-store'
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
