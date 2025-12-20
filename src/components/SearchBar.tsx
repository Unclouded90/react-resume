import { K, type I18nKey } from "../i18n/keys";
import "./SearchBar.css";

type TFn = (k: I18nKey) => string;

type SearchBarProps = {
    t: TFn;
    value: string;
    onChange: (next: string) => void;
    onSubmit: () => void;
};

export function SearchBar({ t, value, onChange, onSubmit }: SearchBarProps) {
    return (
        <form
            className="searchbar"
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
            role="search"
        >
            <div className="searchbar__pill">
                <input
                    className="searchbar__input"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={t(K.search.placeholder)}
                    aria-label={t(K.search.label)}
                    spellCheck={false}
                    autoComplete="off"
                />

                {value.trim().length > 0 && (
                    <button
                        type="button"
                        className="searchbar__clearIcon"
                        onClick={() => onChange("")}
                    >
                        ✕
                    </button>
                )}

                <button className="searchbar__submit" type="submit" aria-label="Submit">
                    ↵
                </button>
            </div>
        </form>
    );
}
