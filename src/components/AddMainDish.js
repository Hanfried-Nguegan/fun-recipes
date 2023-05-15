import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AddMainDish = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const FormModal = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [timer, setTimer] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");
    const [titleError, setTitleError] = useState("");
    const [timerError, setTimerError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [recipeError, setRecipeError] = useState("");

    const handleAddIngredient = () => {
      setIngredients([...ingredients, ""]);
    };

    const handleIngredientChange = (index, value) => {
      const updatedIngredients = [...ingredients];
      updatedIngredients[index] = value;
      setIngredients(updatedIngredients);
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // Validations
      let isValid = true;

      //Title validation
      if (typeof title !== "string" || title.trim() === "") {
        isValid = false;
        setTitleError("Title should be a string");
      } else {
        setTitleError("");
      }

      // Timer validation
      if (!Number.isInteger(parseInt(timer))) {
        isValid = false;
        // Display error message or handle invalid input for timer
        setTimerError("Timer should be an integer");
      } else {
        setTimerError("");
      }

      if (typeof recipe !== "string" || recipe.trim() === "") {
        isValid = false;
        setRecipeError("Title should be a string");
      } else {
        setRecipeError("");
      }

      // Submit the form data
      // You can access the form values using the state variables
      if (isValid) {
        // Your form submission logic here
        console.log("Form submitted successfully!");
      }
    };
    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        setShowForm(false);
      }
    };
    return (
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={handleBackdropClick}
          >
            <div className="bg-pinkychoco p-6 rounded-lg max-h-[90vh] overflow-auto">
              <h2 className="textstyle text-bold text-[#e5799b] text-center">
                Add Main Dish
              </h2>
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4 mt-2">
                  <label
                    htmlFor="title"
                    className="block text-gray-700 font-semibold mb-1"
                  >
                    Name of Main Dish:
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded-md focus:outline-none focus:bg-white"
                  />
                  {titleError && <p className="text-red-500">{titleError}</p>}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-gray-700 font-semibold mb-1"
                  >
                    Upload Image:
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="w-full bg-transparent text-gray-700"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="timer"
                    className="block text-gray-700 font-semibold mb-1"
                  >
                    Timer:
                  </label>
                  <input
                    type="text"
                    id="timer"
                    value={timer}
                    onChange={(e) => {
                      setTimer(e.target.value);
                    }}
                    className="w-full px-3 py-2 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
                  />
                  {timerError && <p className="text-red-500">{timerError}</p>}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 font-semibold mb-1"
                  >
                    Short Description:
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    className="w-full px-3 py-2 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="ingredients"
                    className="block text-gray-700 font-semibold mb-1"
                  >
                    Ingredients:
                  </label>
                  {ingredients.map((ingredient, index) => (
                    <input
                      key={index}
                      type="text"
                      value={ingredient}
                      onChange={(e) => {
                        handleIngredientChange(index, e.target.value);
                      }}
                      className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded-md mb-2 focus:outline-none focus:bg-white"
                    />
                  ))}
                  <button
                    type="button"
                    className="bg-white hover:bg-opacity-75 py-1 px-3 font-semibold rounded"
                    onClick={handleAddIngredient}
                  >
                    Add Ingredient
                  </button>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="recipe"
                    className="block text-gray-700 font-semibold mb-1"
                  >
                    Recipe of the Dish:
                  </label>
                  <textarea
                    id="recipe"
                    value={recipe}
                    onChange={(e) => setRecipe(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded-md focus:outline-none focus:bg-white"
                  />
                  {recipeError && <p className="text-red-500">{recipeError}</p>}
                </div>
                <button
                  type="submit"
                  className="bg-white hover:bg-opacity-75 py-2 px-4 font-semibold rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
      <div
        className=" min-w-[140px] md:w-[180px] min-h-[180px] md:h-[220px] rounded-[10px] border-[3px] border-[#e5799b] cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex flex-col items-center justify-center h-full text-[#e5799b]">
          <span className="text-[25px] font-extrabold">+</span>
          <p className="textstyle text-[20px]">
            Add
            <br />
            your
            <br />
            main
          </p>
        </div>
      </div>
      {showForm && <FormModal />}
    </>
  );
};

export default AddMainDish;
