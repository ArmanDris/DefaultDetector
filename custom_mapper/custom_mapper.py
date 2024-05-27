from sklearn.base import BaseEstimator, TransformerMixin

class CustomMapper(BaseEstimator, TransformerMixin):
    def __init__(self):
        # Order is: unknown, unknown, other, high-school, university, grad-school
        self.mapping = {0: 0, 5: 1, 6: 2, 4: 3, 3: 4, 2: 5, 1: 6}

    def fit(self, X, y=None):
        return self

    def transform(self, X):
        return X.apply(lambda col: col.map(self.mapping))