# Setting Up the Project


## get the project in your local system
downlod Git from https://git-scm.com/downloads/win

After installing, check that Git works by opening your terminal (or Git Bash on Windows) and running:

          git --version

Configure Git

          git config --global user.name "Your Name"

          git config --global user.email "you@example.com"

clone(copy) the project to your local system be using below command:

          git clone https://github.com/TEswarreddy/Predicting-Liver-Cirrhosis-Using-Advanced-Machine-Learning-Techniques.git



## Download the dataset from koggle

          https://www.kaggle.com/datasets/bhavanipriya222/liver-cirrhosis-prediction


## Run the Project


### Train the Model
If you want to again re-train the model,then choose bolow one for trian the model according to your convenience


1) use Jupyter Notebook provided by Anaconda Navigator

   to install Anacode Navigatot Download the Anacond by https://www.anaconda.com/download

2)use Google colabs , because Colab is used extensively in the machine learning community with applications. https://colab.research.google.com/
3)use VsCode for IDE and model training 

  first install VsCode by  https://code.visualstudio.com/download

  and then install extenstion in Vscode, the extensions are Jupyter,python

### Run the Entire Project

Follow the steps below to set up and run this Flask + Machine Learning project locally:

#### 1️⃣ Create a Virtual Environment
Create an isolated Python environment to manage project dependencies:

          python -m venv venv
          
This will create a venv/ folder containing the virtual environment.

#### 2️⃣ Activate the Virtual Environment

On Windows:
          venv\Scripts\activate
On macOS/Linux:
          source venv/bin/activate
                    
You should see the environment name (e.g., (venv)) in your terminal prompt, indicating that it's activated.


#### 3️⃣ Install Project Dependencies

With the virtual environment activated, install all required Python packages using:

          pip install -r requirements.txt
          
This installs Flask, scikit-learn, pandas, and other libraries listed in requirements.txt.



#### ▶️ Running the Flask App
After setting up the environment, start the Flask server:

          python app.py
          
Then open your browser and visit: http://localhost:5000





