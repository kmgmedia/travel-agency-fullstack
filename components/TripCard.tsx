    import { Link, useLocation } from "react-router";
    import { useState, useEffect } from "react";
    import { cn, getFirstWord } from "~/lib/utils";

    // Dynamic import for Syncfusion components to avoid CommonJS issues
    let ChipListComponent: any = null;
    let ChipsDirective: any = null;
    let ChipDirective: any = null;

    interface TripCardProps {
    id: string;
    name: string;
    location: string;
    imageUrl: string;
    tags: string[];
    price: string;
    }

    const TripCard = ({
    id,
    name,
    location,
    imageUrl,
    tags,
    price,
    }: TripCardProps) => {
    const path = useLocation();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Load Syncfusion components dynamically
        import("@syncfusion/ej2-react-buttons").then((pkg) => {
        ChipListComponent = pkg.ChipListComponent;
        ChipsDirective = pkg.ChipsDirective;
        ChipDirective = pkg.ChipDirective;
        setIsLoaded(true);
        });
    }, []);

    return (
        <Link
        to={
            path.pathname === "/" || path.pathname.startsWith("/travel")
            ? `/travel/trips/${id}`
            : `/trips/${id}`
        }
        className="trip-card"
        >
        <img src={imageUrl} alt={name} />

        <article>
            <h2>{name}</h2>
            <div className="flex items-center gap-1 mt-2">
            <img
                src="/assets/icons/location-mark.svg"
                alt="location"
                className="size-4"
            />
            <span className="text-sm text-gray-600">{location}</span>
            </div>
        </article>

        <div className="mt-5 pl-[18px] pr-3.5 pb-5">
            {isLoaded && ChipListComponent && ChipsDirective && ChipDirective ? (
            <ChipListComponent id="travel-chip">
                <ChipsDirective>
                {tags.map((tag, index) => (
                    <ChipDirective
                    key={index}
                    text={getFirstWord(tag)}
                    cssClass={cn(
                        index === 1
                        ? "!bg-pink-50 !text-pink-500"
                        : "!bg-success-50 !text-success-700"
                    )}
                    />
                ))}
                </ChipsDirective>
            </ChipListComponent>
            ) : (
            // Fallback rendering while components are loading
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                <span
                    key={index}
                    className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium",
                    index === 1
                        ? "bg-pink-50 text-pink-500"
                        : "bg-green-50 text-green-700"
                    )}
                >
                    {getFirstWord(tag)}
                </span>
                ))}
            </div>
            )}
        </div>

        <article className="tripCard-pill">{price}</article>
        </Link>
    );
    };

    export default TripCard;
