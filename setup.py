from setuptools import setup, find_packages

setup(
    name='custom_mapper',
    version='0.1',
    packages=find_packages(),
    install_requires=[
        'scikit-learn',
        'pandas',
        'joblib'
    ],
)
