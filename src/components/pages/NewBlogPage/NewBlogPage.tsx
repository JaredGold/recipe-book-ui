import { useState } from "react";
import PageContainer from "../../layout/PageContainer/PageContainer";

const NewBlogPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(event.target.value);
  };

  const textInputSharedClass =
    "block w-96 border-gray-300 rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500";

  return (
    <PageContainer>
      <h1 className="text-2xl font-semibold text-gray-800">Create New Blog</h1>
      <div className="flex flex-col gap-2">
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            className={textInputSharedClass}
            onChange={(event) => changeHandler(event, setTitle)}
          />
        </div>
        <div>
          <label>Content </label>
          <textarea
            name="content"
            className={"resize " + textInputSharedClass}
            onChange={(event) => changeHandler(event, setContent)}
          />
        </div>
        <div className="flex">
          <button
            className="bg-violet-400 hover:bg-violet-300 rounded-md py-1 px-8"
            onClick={() => console.log(title, content)}
          >
            Create
          </button>
        </div>
      </div>
    </PageContainer>
  );
};

export default NewBlogPage;
