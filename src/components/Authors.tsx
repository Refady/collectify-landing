import type { CollectionEntry } from "astro:content";
import { Button } from "@/components/ui/button.tsx";

interface Props {
  authors: CollectionEntry<"authors">[];
}

const Authors = ({ authors }) => {
  return (
    <div className="flex flex-col items-center" id="authors">
      <h2 className="text-center text-[35px] md:text-[42px] font-bold italic authors__title">Refady Software</h2>
      <p className="text-center text-[20px] font-medium text-gray mb-[100px]">Twórcy Collectify</p>

      <div className="flex gap-[50px] flex-row items-start flex-wrap lg:items-start justify-center">
        {
          authors.map(({ data: author }) => (
            <div className="flex flex-col items-center justify-start gap-[20px]">
              <img src={author.avatar.url} alt={author.fullName} className="rounded-full max-w-[300px] max-h-[300px]" />
              <div className="flex flex-col items-center gap-[10px]">
                <h3 className="font-bold text-[25px]">{author.fullName}</h3>
                {author.nickname && <p className="authors__nickname text-[19px] font-bold italic">{author.nickname}</p>}
                <div>
                  {author.roles.map((role: string) => (
                    <p
                      className="text-[16px] md:text-[18px] max-w-[250px] text-center text-gray font-medium">{role}</p>
                  ))}
                </div>
                {author.portfolio && (
                  <a href={author.portfolio} className="mt-[15px]" target="_blank" rel="noreferrer">
                    <Button variant="outline" className="cursor-pointer">Portolio</Button>
                  </a>
                )}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Authors;