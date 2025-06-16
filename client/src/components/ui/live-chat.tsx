import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LiveChat() {
  const handleChatClick = () => {
    // In a real implementation, this would open your chat service
    alert('Chat widget would open here - connect to your preferred chat service (Intercom, Zendesk, etc.)');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleChatClick}
        size="lg"
        className="bg-fresh-green hover:bg-fresh-green/90 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}
