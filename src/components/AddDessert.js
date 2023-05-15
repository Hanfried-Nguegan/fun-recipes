import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AddDessert = () => {
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

      // Submit the form data
      // You can access the form values using the state variables
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
            <div className="bg-white p-6 rounded-lg max-h-[90vh] overflow-auto">
              <h2 className="textstyle text-[#e5799b] text-bold text-center">
                Add Dessert
              </h2>
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4 mt-2">
                  <label
                    htmlFor="title"
                    className="block text-gray-700 font-semibold mb-1"
                  >
                    Name of Dessert:
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded-md focus:outline-none focus:bg-white"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
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
                    className="w-full bg-transparent text-gray-700"
                    onChange={(e) => setImage(e.target.files[0])}
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
                    className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded-md focus:outline-none focus:bg-white"
                    value={timer}
                    onChange={(e) => setTimer(e.target.value)}
                  />
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
                    className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded-md focus:outline-none focus:bg-white"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
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
                      className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded-md mb-2 focus:outline-none focus:bg-white"
                      value={ingredient}
                      onChange={(e) =>
                        handleIngredientChange(index, e.target.value)
                      }
                    />
                  ))}
                  <button
                    type="button"
                    className="bg-[#e5799b] hover:bg-[#e5799b] hover:bg-opacity-75 text-white py-1 px-3 rounded"
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
                    Recipe of the Dessert:
                  </label>
                  <textarea
                    id="recipe"
                    className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded-md focus:outline-none focus:bg-white"
                    value={recipe}
                    onChange={(e) => setRecipe(e.target.value)}
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="bg-[#e5799b] hover:bg-[#e5799b] hover:bg-opacity-75 text-white py-2 px-4 rounded-md"
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
        className=" min-w-[140px] md:w-[180px] min-h-[180px] md:h-[220px] rounded-[10px] border-[3px] border-white cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex flex-col items-center justify-center h-full text-white">
          <span className="text-[25px] font-extrabold">+</span>
          <p className="textstyle text-[20px]">
            Add
            <br />
            your
            <br />
            dessert
          </p>
        </div>
      </div>
      {showForm && <FormModal />}
    </>
  );
};

export default AddDessert;
