import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";

function Search_btn() {
  return (
    <div>
      <Button className="rounded-none " variant="outline">
        Search <Search />
      </Button>
    </div>
  );
}

export default Search_btn;
