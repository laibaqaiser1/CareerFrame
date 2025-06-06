import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function LeaderboardMockup() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg max-w-md mx-auto">
      {/* Header Tabs */}
      <div className="flex bg-white border border-gray-200 rounded-lg p-1 mb-5">
        <div className="flex-1 text-center py-2 px-4 text-gray-600 rounded-md">
          Individual Leaderboard
        </div>
        <div className="flex-1 text-center py-2 px-4 bg-blue-600 text-white rounded-md font-medium">
          Teams Leaderboard
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-5">
        <Button 
          variant="outline" 
          size="sm" 
          className="border-green-600 text-green-600 hover:bg-green-50"
        >
          Redeem Points
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="border-gray-400 text-gray-400 cursor-not-allowed"
          disabled
        >
          View Rewards
        </Button>
      </div>

      {/* Leaderboard Positions */}
      <div className="flex justify-center items-end gap-6 mb-6">
        {/* 2nd Place */}
        <div className="bg-white border-2 border-green-500 rounded-xl p-4 text-center min-h-[120px] flex flex-col justify-between">
          <div className="text-4xl font-bold text-green-700 mb-2">2</div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div>
              <div className="font-semibold text-sm">Sarah Chen</div>
              <div className="text-xs text-gray-500">2,450 XP</div>
            </div>
          </div>
        </div>

        {/* 1st Place (Taller) */}
        <div className="bg-white border-2 border-green-500 rounded-xl p-4 text-center min-h-[140px] flex flex-col justify-between">
          <div className="text-5xl font-bold text-green-700 mb-2">1</div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            <div>
              <div className="font-semibold text-sm">Alex Kim</div>
              <div className="text-xs text-gray-500">3,120 XP</div>
            </div>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="bg-white border-2 border-green-500 rounded-xl p-4 text-center min-h-[100px] flex flex-col justify-between">
          <div className="text-3xl font-bold text-green-700 mb-2">3</div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
            <div>
              <div className="font-semibold text-sm">Jamie Lee</div>
              <div className="text-xs text-gray-500">1,980 XP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Rankings */}
      <div className="space-y-3">
        {[
          { rank: 4, name: "Morgan Taylor", xp: "1,750 XP", color: "bg-orange-500" },
          { rank: 5, name: "Jordan Smith", xp: "1,620 XP", color: "bg-red-500" },
          { rank: 6, name: "Casey Brown", xp: "1,540 XP", color: "bg-pink-500" }
        ].map((user) => (
          <div key={user.rank} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-gray-600 w-6 text-center">
              {user.rank}
            </div>
            <div className={`w-8 h-8 ${user.color} rounded-full`}></div>
            <div className="flex-1">
              <div className="font-medium text-sm">{user.name}</div>
              <div className="text-xs text-gray-500">{user.xp}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="mt-5 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">Your Rank: #8</div>
          <div className="text-sm font-semibold text-green-600">1,420 XP</div>
        </div>
      </div>
    </div>
  );
}